import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2068Component } from './my-comp-2068.component';

describe('MyComp2068Component', () => {
  let component: MyComp2068Component;
  let fixture: ComponentFixture<MyComp2068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
