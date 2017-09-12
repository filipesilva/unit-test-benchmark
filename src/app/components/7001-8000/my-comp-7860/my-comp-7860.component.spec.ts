import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7860Component } from './my-comp-7860.component';

describe('MyComp7860Component', () => {
  let component: MyComp7860Component;
  let fixture: ComponentFixture<MyComp7860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
