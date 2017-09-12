import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5366Component } from './my-comp-5366.component';

describe('MyComp5366Component', () => {
  let component: MyComp5366Component;
  let fixture: ComponentFixture<MyComp5366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
