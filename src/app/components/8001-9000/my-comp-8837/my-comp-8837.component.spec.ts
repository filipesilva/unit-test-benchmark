import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8837Component } from './my-comp-8837.component';

describe('MyComp8837Component', () => {
  let component: MyComp8837Component;
  let fixture: ComponentFixture<MyComp8837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
