import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8104Component } from './my-comp-8104.component';

describe('MyComp8104Component', () => {
  let component: MyComp8104Component;
  let fixture: ComponentFixture<MyComp8104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
