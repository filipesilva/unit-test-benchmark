import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8922Component } from './my-comp-8922.component';

describe('MyComp8922Component', () => {
  let component: MyComp8922Component;
  let fixture: ComponentFixture<MyComp8922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
