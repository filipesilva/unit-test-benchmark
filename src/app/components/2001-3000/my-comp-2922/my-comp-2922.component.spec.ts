import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2922Component } from './my-comp-2922.component';

describe('MyComp2922Component', () => {
  let component: MyComp2922Component;
  let fixture: ComponentFixture<MyComp2922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
