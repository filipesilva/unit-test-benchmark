import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8800Component } from './my-comp-8800.component';

describe('MyComp8800Component', () => {
  let component: MyComp8800Component;
  let fixture: ComponentFixture<MyComp8800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
