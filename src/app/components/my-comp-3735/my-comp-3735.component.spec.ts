import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3735Component } from './my-comp-3735.component';

describe('MyComp3735Component', () => {
  let component: MyComp3735Component;
  let fixture: ComponentFixture<MyComp3735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
