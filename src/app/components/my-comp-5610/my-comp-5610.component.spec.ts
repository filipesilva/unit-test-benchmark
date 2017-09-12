import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5610Component } from './my-comp-5610.component';

describe('MyComp5610Component', () => {
  let component: MyComp5610Component;
  let fixture: ComponentFixture<MyComp5610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
