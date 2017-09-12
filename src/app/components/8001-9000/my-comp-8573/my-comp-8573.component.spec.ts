import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8573Component } from './my-comp-8573.component';

describe('MyComp8573Component', () => {
  let component: MyComp8573Component;
  let fixture: ComponentFixture<MyComp8573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
