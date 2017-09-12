import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8630Component } from './my-comp-8630.component';

describe('MyComp8630Component', () => {
  let component: MyComp8630Component;
  let fixture: ComponentFixture<MyComp8630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
