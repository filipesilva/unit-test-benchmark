import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5061Component } from './my-comp-5061.component';

describe('MyComp5061Component', () => {
  let component: MyComp5061Component;
  let fixture: ComponentFixture<MyComp5061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
