import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8074Component } from './my-comp-8074.component';

describe('MyComp8074Component', () => {
  let component: MyComp8074Component;
  let fixture: ComponentFixture<MyComp8074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
