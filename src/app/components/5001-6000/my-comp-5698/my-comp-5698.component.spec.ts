import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5698Component } from './my-comp-5698.component';

describe('MyComp5698Component', () => {
  let component: MyComp5698Component;
  let fixture: ComponentFixture<MyComp5698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
