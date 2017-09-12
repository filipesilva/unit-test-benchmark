import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8681Component } from './my-comp-8681.component';

describe('MyComp8681Component', () => {
  let component: MyComp8681Component;
  let fixture: ComponentFixture<MyComp8681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
