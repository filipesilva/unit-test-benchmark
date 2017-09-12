import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3486Component } from './my-comp-3486.component';

describe('MyComp3486Component', () => {
  let component: MyComp3486Component;
  let fixture: ComponentFixture<MyComp3486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
