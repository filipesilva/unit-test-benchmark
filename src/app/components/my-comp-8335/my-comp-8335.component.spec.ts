import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8335Component } from './my-comp-8335.component';

describe('MyComp8335Component', () => {
  let component: MyComp8335Component;
  let fixture: ComponentFixture<MyComp8335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
