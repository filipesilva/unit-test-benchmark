import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5351Component } from './my-comp-5351.component';

describe('MyComp5351Component', () => {
  let component: MyComp5351Component;
  let fixture: ComponentFixture<MyComp5351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
