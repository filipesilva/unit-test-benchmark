import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8628Component } from './my-comp-8628.component';

describe('MyComp8628Component', () => {
  let component: MyComp8628Component;
  let fixture: ComponentFixture<MyComp8628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
