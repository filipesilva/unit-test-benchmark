import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8952Component } from './my-comp-8952.component';

describe('MyComp8952Component', () => {
  let component: MyComp8952Component;
  let fixture: ComponentFixture<MyComp8952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
