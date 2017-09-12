import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5492Component } from './my-comp-5492.component';

describe('MyComp5492Component', () => {
  let component: MyComp5492Component;
  let fixture: ComponentFixture<MyComp5492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
