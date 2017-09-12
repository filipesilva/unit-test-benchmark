import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8002Component } from './my-comp-8002.component';

describe('MyComp8002Component', () => {
  let component: MyComp8002Component;
  let fixture: ComponentFixture<MyComp8002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
