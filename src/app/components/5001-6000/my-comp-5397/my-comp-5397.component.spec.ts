import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5397Component } from './my-comp-5397.component';

describe('MyComp5397Component', () => {
  let component: MyComp5397Component;
  let fixture: ComponentFixture<MyComp5397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
