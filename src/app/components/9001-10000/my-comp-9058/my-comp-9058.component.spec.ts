import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9058Component } from './my-comp-9058.component';

describe('MyComp9058Component', () => {
  let component: MyComp9058Component;
  let fixture: ComponentFixture<MyComp9058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
