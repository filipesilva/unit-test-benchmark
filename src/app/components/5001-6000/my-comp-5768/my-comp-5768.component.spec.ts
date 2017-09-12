import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5768Component } from './my-comp-5768.component';

describe('MyComp5768Component', () => {
  let component: MyComp5768Component;
  let fixture: ComponentFixture<MyComp5768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
