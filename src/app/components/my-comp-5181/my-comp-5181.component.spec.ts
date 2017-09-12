import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5181Component } from './my-comp-5181.component';

describe('MyComp5181Component', () => {
  let component: MyComp5181Component;
  let fixture: ComponentFixture<MyComp5181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
