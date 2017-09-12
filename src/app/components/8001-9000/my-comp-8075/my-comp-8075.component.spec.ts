import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8075Component } from './my-comp-8075.component';

describe('MyComp8075Component', () => {
  let component: MyComp8075Component;
  let fixture: ComponentFixture<MyComp8075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
