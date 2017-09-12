import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8966Component } from './my-comp-8966.component';

describe('MyComp8966Component', () => {
  let component: MyComp8966Component;
  let fixture: ComponentFixture<MyComp8966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
