import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp989Component } from './my-comp-989.component';

describe('MyComp989Component', () => {
  let component: MyComp989Component;
  let fixture: ComponentFixture<MyComp989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
