import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6685Component } from './my-comp-6685.component';

describe('MyComp6685Component', () => {
  let component: MyComp6685Component;
  let fixture: ComponentFixture<MyComp6685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
