import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5305Component } from './my-comp-5305.component';

describe('MyComp5305Component', () => {
  let component: MyComp5305Component;
  let fixture: ComponentFixture<MyComp5305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
