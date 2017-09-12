import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3625Component } from './my-comp-3625.component';

describe('MyComp3625Component', () => {
  let component: MyComp3625Component;
  let fixture: ComponentFixture<MyComp3625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
