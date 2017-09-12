import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2006Component } from './my-comp-2006.component';

describe('MyComp2006Component', () => {
  let component: MyComp2006Component;
  let fixture: ComponentFixture<MyComp2006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
