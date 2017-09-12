import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8810Component } from './my-comp-8810.component';

describe('MyComp8810Component', () => {
  let component: MyComp8810Component;
  let fixture: ComponentFixture<MyComp8810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
