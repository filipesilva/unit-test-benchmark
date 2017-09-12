import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7773Component } from './my-comp-7773.component';

describe('MyComp7773Component', () => {
  let component: MyComp7773Component;
  let fixture: ComponentFixture<MyComp7773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
