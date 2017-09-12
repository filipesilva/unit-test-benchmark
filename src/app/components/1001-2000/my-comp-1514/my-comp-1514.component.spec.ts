import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1514Component } from './my-comp-1514.component';

describe('MyComp1514Component', () => {
  let component: MyComp1514Component;
  let fixture: ComponentFixture<MyComp1514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
