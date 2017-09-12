import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5826Component } from './my-comp-5826.component';

describe('MyComp5826Component', () => {
  let component: MyComp5826Component;
  let fixture: ComponentFixture<MyComp5826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
