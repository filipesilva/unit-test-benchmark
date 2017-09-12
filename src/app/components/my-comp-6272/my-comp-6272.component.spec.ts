import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6272Component } from './my-comp-6272.component';

describe('MyComp6272Component', () => {
  let component: MyComp6272Component;
  let fixture: ComponentFixture<MyComp6272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
