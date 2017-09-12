import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1685Component } from './my-comp-1685.component';

describe('MyComp1685Component', () => {
  let component: MyComp1685Component;
  let fixture: ComponentFixture<MyComp1685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
