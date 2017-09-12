import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3641Component } from './my-comp-3641.component';

describe('MyComp3641Component', () => {
  let component: MyComp3641Component;
  let fixture: ComponentFixture<MyComp3641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
