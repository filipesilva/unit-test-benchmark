import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3579Component } from './my-comp-3579.component';

describe('MyComp3579Component', () => {
  let component: MyComp3579Component;
  let fixture: ComponentFixture<MyComp3579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
