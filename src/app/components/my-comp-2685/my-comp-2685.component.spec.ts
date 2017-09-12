import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2685Component } from './my-comp-2685.component';

describe('MyComp2685Component', () => {
  let component: MyComp2685Component;
  let fixture: ComponentFixture<MyComp2685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
