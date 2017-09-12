import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp181Component } from './my-comp-181.component';

describe('MyComp181Component', () => {
  let component: MyComp181Component;
  let fixture: ComponentFixture<MyComp181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
