import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5256Component } from './my-comp-5256.component';

describe('MyComp5256Component', () => {
  let component: MyComp5256Component;
  let fixture: ComponentFixture<MyComp5256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
