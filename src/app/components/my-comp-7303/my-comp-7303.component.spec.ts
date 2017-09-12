import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7303Component } from './my-comp-7303.component';

describe('MyComp7303Component', () => {
  let component: MyComp7303Component;
  let fixture: ComponentFixture<MyComp7303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
