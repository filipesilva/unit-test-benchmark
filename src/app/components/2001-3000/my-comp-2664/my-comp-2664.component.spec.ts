import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2664Component } from './my-comp-2664.component';

describe('MyComp2664Component', () => {
  let component: MyComp2664Component;
  let fixture: ComponentFixture<MyComp2664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
