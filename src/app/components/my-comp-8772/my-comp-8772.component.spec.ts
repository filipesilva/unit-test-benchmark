import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8772Component } from './my-comp-8772.component';

describe('MyComp8772Component', () => {
  let component: MyComp8772Component;
  let fixture: ComponentFixture<MyComp8772Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8772Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
