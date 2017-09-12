import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp589Component } from './my-comp-589.component';

describe('MyComp589Component', () => {
  let component: MyComp589Component;
  let fixture: ComponentFixture<MyComp589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
