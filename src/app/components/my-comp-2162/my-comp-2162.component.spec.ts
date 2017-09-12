import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2162Component } from './my-comp-2162.component';

describe('MyComp2162Component', () => {
  let component: MyComp2162Component;
  let fixture: ComponentFixture<MyComp2162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
