import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3944Component } from './my-comp-3944.component';

describe('MyComp3944Component', () => {
  let component: MyComp3944Component;
  let fixture: ComponentFixture<MyComp3944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
