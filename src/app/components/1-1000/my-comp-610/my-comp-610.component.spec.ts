import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp610Component } from './my-comp-610.component';

describe('MyComp610Component', () => {
  let component: MyComp610Component;
  let fixture: ComponentFixture<MyComp610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
