import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5283Component } from './my-comp-5283.component';

describe('MyComp5283Component', () => {
  let component: MyComp5283Component;
  let fixture: ComponentFixture<MyComp5283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
